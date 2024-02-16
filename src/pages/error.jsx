import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-red-700 text-4xl font-bold">Waduh kenapa nih !?</h1>
      <p className="my-4">Maafin ya, terjadi kesalahan pada website :(</p>
      <p className="font-semibold">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
