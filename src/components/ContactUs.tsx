"use client"

const contacts = [
  { id: 1, name: "Dr. Poonam Singh", designation: "General Chair", email: "psingh@nitrkl.ac.in" },
  { id: 2, name: "Dr. Susmita Das", designation: "General Chair", email: "sdas@nitrkl.ac.in" },
  { id: 3, name: "Dr. A. K. Swain", designation: "Organizing Chair", email: "swaina@nitrkl.ac.in" },
  { id: 4, name: "Dr. S. M. Hiremath", designation: "Organizing Chair", email: "hiremaths@nitrkl.ac.in" },
  { id: 5, name: "Dr. A. Ghosh", designation: "Organizing Chair", email: "ghosha@ece.nits.ac.in" },
  { id: 6, name: "Dr. T. R. Choudhury", designation: "Organizing Chair", email: "choudhury@nitrkl.ac.in" },
]

const EmailIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

export default function ContactUs() {
  return (
    <section className="relative py-20  flex flex-col items-center">
      <div className="container relative mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-12 text-black drop-shadow-lg">Contact Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {contacts.map((contact, index) => (
            <div
              key={contact.id}
              className="bg-white bg-opacity-60 shadow-lg rounded-xl p-6 text-center w-80 transform transition duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-b from-[#06b6d4] via-[#2563eb] to-[#6366f1] flex items-center justify-center text-white text-2xl font-bold">
                {contact.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">{contact.name}</h3>
              <p className="text-lg text-gray-700 mb-3">{contact.designation}</p>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center text-blue-600 font-medium hover:underline transition duration-300"
                aria-label={`Email ${contact.name}`}
              >
                <EmailIcon />
                <span>{contact.email}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}