import Image from "next/image";

const getTrains = async () => {
  const response = await fetch("http://localhost:3001/trains");
  const { result } = await response.json();
  return result;
};

export default async function Home() {
  const trains = await getTrains();
  return (
    <main class="p-10">
      <h1 class="text-center mb-5">
        Train Central By Ravindar Guguloth (CS20B1085)
      </h1>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Train Name
              </th>
              <th scope="col" class="px-6 py-3">
                Train Number
              </th>
              <th scope="col" class="px-6 py-3">
                Departure Time
              </th>
              <th scope="col" class="px-6 py-3">
                Seats Available
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Delayed By
              </th>
              <th scope="col" class="px-6 py-3">
                More
              </th>
            </tr>
          </thead>
          <tbody>
            {trains.map((train, index) => {
              return (
                <tr class="bg-white dark:bg-gray-800" key={index}>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {train.trainName}
                  </th>
                  <td class="px-6 py-4">{train.trainNumber}</td>
                  <td class="px-6 py-4">{`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}</td>
                  <td class="px-6 py-4">{`Sleeper: ${train.seatsAvailable.sleeper}, AC: ${train.seatsAvailable.AC}`}</td>
                  <td class="px-6 py-4">{`Sleeper: ${train.price.sleeper}, AC: ${train.price.AC}`}</td>
                  <td class="px-6 py-4">{train.delayedBy}</td>
                  <th scope="col" class="px-6 py-3">
                    <a
                      href={`/${train.trainNumber}`}
                      class="p-1 bg-blue-500 rounded-md font-normal text-white"
                    >
                      View
                    </a>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
