import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router";
import MainNavigation from "../components/MainNavigation";

const ErrorElement = () => {
  const error = useRouteError();

  let title = "Something Went Wrong";
  let message = "Please Try Again later";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  } else if (error.status === 404) {
    title = "Not Found!";
    message = "Counld not find Link ";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>{message}</PageContent>
    </>
  );
};

export default ErrorElement;
