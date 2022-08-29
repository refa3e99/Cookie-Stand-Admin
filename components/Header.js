export default function Header() {
  return (
    <>
      <header className="flex justify-between bg-green-400 p-4">
        <h1 className="text-3xl">Cookie Stand Admin</h1>
        <button
          type="submit"
          className="block p-2 font-bold text-gray-700 rounded-md bg-gray-100"
        >
          Overview
        </button>
      </header>
    </>
  );
}
