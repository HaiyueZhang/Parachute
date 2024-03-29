import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { SiAuth0 } from "react-icons/si";

interface ButtonProps {
  onClick: () => void;
  buttonText: string;
  isBlack: boolean;
}

const LoginButton: React.FC<ButtonProps> = ({
  onClick,
  buttonText,
  isBlack,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        "flex w-full flex-row items-center justify-center gap-5 rounded-lg border-2 p-3 text-left font-semibold" +
        (isBlack
          ? " border-transparent bg-black text-white"
          : " border-gray-300")
      }
    >
      {isBlack ? (
        <FcGoogle className="h-8 w-8" />
      ) : (
        <SiAuth0 className="h-8 w-8" />
      )}
      <div className="w-[150px]">{buttonText}</div>
    </button>
  );
};

export const GoogleLoginButton = () => {
  return (
    <LoginButton
      onClick={() =>
        void signIn("google", {
          callbackUrl: `${window.location.origin}/dashboard`,
        })
      }
      buttonText="Sign in with Google"
      isBlack
    />
  );
};

export const Auth0LoginButton = () => {
  return (
    <LoginButton
      onClick={() =>
        void signIn("auth0", {
          callbackUrl: `${window.location.origin}/dashboard`,
        })
      }
      buttonText="Sign in with Auth0"
      isBlack={false}
    />
  );
};
