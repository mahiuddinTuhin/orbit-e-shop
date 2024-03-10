import Signup from "../components/signup/Signup.tsx";

import styles from "./../styles/styles.ts";

function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col space-y-8 items-center justify-center">
      <div>
        <h1>Create a new account</h1>
      </div>
      <div
        className={`px-12 pt-8 pb-4 rounded-lg border border-indigo-600  shadow-lg  ${styles.primary_bg}`}
      >
        <Signup />
      </div>
    </div>
  );
}

export default SignupPage;
