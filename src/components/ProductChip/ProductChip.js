import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Bags",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Bags",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Clothing",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
];

export default function ProductChip() {
  return (
    <ul className="divide-y divide-gray-100 mx-2">
      {people.map((person) => (
        <li
          key={person.email}
          className="flex justify-between mt-6 py-5 bg-gray-200 rounded-md p-4"
        >
          <div className="flex min-w-0 gap-x-4  w-1/4 sm:w-1/4 msdm:w-2/5">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={person.imageUrl}
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {person.name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-900">
                {person.email}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 justify-center mdsm:flex mdsm:flex-col mdsm:items-start w-1/5">
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
          </div>
          <div className="hidden shrink-0 sm:flex justify-center sm:flex-col sm:items-start  w-1/5 ">
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Out of Stock{" "}
                <time dateTime={person.lastSeenDateTime}>
                  {person.lastSeen}
                </time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">In stock</p>
              </div>
            )}
          </div>
          <div className="shrink-0 justify-between flex flex-col items-end ">
            <button
              type="button"
              className="relative -m-2 p-2 text-gray-500 hover:text-gray-600"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Delete</span>
              <TrashIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="relative -m-2 p-2 text-gray-500 hover:text-gray-600"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Delete</span>
              <PencilSquareIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
