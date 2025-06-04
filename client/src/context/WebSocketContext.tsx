import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  ReactNode,
  MutableRefObject,
} from "react";
import { getOrCreateSessionId } from "../utils/session";

interface WebSocketContextType {
  ws: MutableRefObject<WebSocket | null>;
  sendMessage: (message: any) => void;
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(
  undefined
);

export const WebSocketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const ws = useRef<WebSocket | null>(null);
  const sessionId = getOrCreateSessionId();
  const WS_URL = `ws://localhost:8000/?sessionId=${sessionId}`;

  useEffect(() => {
    const socket = new WebSocket(WS_URL);
    ws.current = socket;

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onclose = (event) => {
      console.log("WebSocket closed", event);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error", error);
    };

    return () => {
      socket.close(1000, "Component unmounted");
    };
  }, [WS_URL]);

  const sendMessage = (message: any) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(message));
    } else {
      console.warn("WebSocket is not open");
    }
  };

  return (
    <WebSocketContext.Provider value={{ ws, sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  }
  return context;
};
