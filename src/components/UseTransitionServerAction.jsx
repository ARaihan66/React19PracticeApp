import { useTransition } from "react";

function UseTransitionServerAction() {
  const [isPending, startTransition] = useTransition();

  const handleFromSubmit = (formData) => {
    const userName = formData.get("userName");
    const email = formData.get("email");
    const comment = formData.get("comment");
    console.log(userName, email, comment);
    // startTransition(() => {});
  };

  return (
    <div className="flex justify-center ">
      <form
        action={handleFromSubmit}
        className="bg-neutral-700 px-[50px] py-[80px] rounded-md"
      >
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          className="border-1 border-gray-300 w-[300px] p-2 rounded-md my-2 text-white"
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="User Email"
          className="border-1 border-gray-300 w-[300px] p-2 rounded-md my-2 text-white"
        />
        <br />
        <textarea
          type="comment"
          name="comment"
          placeholder="Comment"
          className="border-1 border-gray-300 w-[300px] p-3 rounded-md my-2 text-white"
        />
        <br />
        <button className="bg-indigo-800 w-[300px] p-2 cursor-pointer text-white font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UseTransitionServerAction;
