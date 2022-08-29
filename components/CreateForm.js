export default function CreateForm({ formHandler }) {
  return (
    <>
      <div className="w-full max-w-screen-lg p-3 px-5 my-5 rounded-md bg-emerald-300">
        <h1 className="text-2xl font-medium text-center">
          Create Cookie Stand
        </h1>
        <form onSubmit={formHandler} className="my-5 rounded-md ">
          <div className="flex flex-wrap ">
            <div className="w-full px-3 mb-5">
              <label className="text-sm font-bold text-gray-700 ">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-700  rounded bg-gray-50 h-1/2"
                id="Location"
                type="string"
                required={true}
              />
            </div>

            <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
              <label className="text-sm font-bold tracking-wide text-gray-700">
                Minimum Customers Per Hour
              </label>
              <input
                className="w-full px-4 py-3 text-gray-700  rounded bg-gray-50 h-1/2"
                id="MinimumCustomersPerHour"
                type="text"
                required={true}
              />
            </div>

            <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
              <label className="text-sm font-bold tracking-wide text-gray-700">
                Maximum Customers Per Hour
              </label>
              <input
                className="w-full px-4 py-3 text-gray-700  rounded bg-gray-50 h-1/2"
                id="MaximumCustomersPerHour"
                type="text"
                required={true}
              />
            </div>

            <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
              <label className="text-sm font-bold tracking-wide text-gray-700">
                Average Cookies Per Hour
              </label>
              <input
                className="w-full px-4 py-3 text-gray-700 rounded  bg-gray-50 h-1/2"
                id="AverageCookiesPerHour"
                type="float"
                required={true}
              />
            </div>

            <div className="mt-4 md:w-1/4 ">
              <button
                type="submit"
                className="block w-full h-full font-bold text-gray-700 rounded-md bg-emerald-500"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
