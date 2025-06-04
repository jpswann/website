// src/context/WebSocketContext.tsx
import React, { createContext, useContext, useEffect, useRef } from "react";
import { getOrCreateSessionId } from "../utils/session";

interface WebSocketContextType {
  ws: React.MutableRefObject<WebSocket | null>;
  sendMessage: (message: any) => void;
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(
  undefined
);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ws = useRef<WebSocket | null>(null);
  const sessionId = getOrCreateSessionId();
  const WS_URL = `ws://localhost:8000/?sessionId=${sessionId}`;

  useEffect(() => {
    ws.current = new WebSocket(WS_URL);

    ws.current.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.current.onclose = (event) => {
      console.log("WebSocket closed", event);
    };

    ws.current.onerror = (error) => {
      console.error("WebSocket error", error);
    };

    return () => {
      ws.current?.close(1000, "App unmounted");
    };
  }, []);

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
