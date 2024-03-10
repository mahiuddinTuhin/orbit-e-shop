import Login from "../components/login/Login.tsx";

import styles from "./../styles/styles.ts";

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col space-y-8 items-center justify-center">
      <div>
        <h1>Login to your account</h1>
      </div>
      <div
        className={`px-12 pt-8 pb-4 rounded-lg border border-indigo-600  shadow-lg  ${styles.primary_bg}`}
      >
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
