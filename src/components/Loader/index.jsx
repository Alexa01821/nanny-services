import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots
      width="120"
      height="160"
      color="var(--color-accent)"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        position: "fixed",
        zIndex: 100,
        top: "0",
        left: "0",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: `var(--bg-back-modal)`,
      }}
      wrapperClass=""
      visible={false}
    />
  );
};

export default Loader;
