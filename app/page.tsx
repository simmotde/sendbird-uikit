"use client";
import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";

export default function Page() {
  return (
    <div style={{ height: '100vh' }}>
      <SendbirdApp
        // Add the two lines below.
        appId={process.env.NEXT_PUBLIC_APP_ID}    // Specify your Sendbird application ID.
        userId={process.env.NEXT_PUBLIC_USER_ID}  // Specify your user ID.
      />
    </div>
);
}
