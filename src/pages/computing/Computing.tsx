import DomainForm from "./components/DomainForm";
import VMList from "./components/VMList";

export default function Computing() {
  return (
    <>
      <DomainForm />
      <div className="my-8 h-[1px] bg-gray-200" />
      <VMList />
    </>
  );
}
