export default function useSession() {
  const userId = localStorage.getItem("userId");

  return {
    userId,
  };
}
