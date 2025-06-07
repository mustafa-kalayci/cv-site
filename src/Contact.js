export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-[#744f9c] mb-10">
        Contact Information
      </h1>

      <div className="space-y-4 text-left text-gray-700">
        <p>Alpen-Adria-Universität Klagenfurt</p>
        <p>Institut für Mathematik</p>
        <p>Hauptgebäude, Nordtrakt West, Ebene 2, Raum N.2.17</p>
        <p>9020 Klagenfurt, Austria</p>
        <br />
        <p>
          <strong>E-mail:</strong>{" "}
          <a
            href="mailto:tekgulkalayci1@gmail.com"
            className="text-purple-600 underline"
          >
            tekgulkalayci1@gmail.com
          </a>
          ,{" "}
          <a
            href="mailto:tekguel.kalayci@aau.at"
            className="text-purple-600 underline"
          >
            tekguel.kalayci@aau.at
          </a>
        </p>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-[#744f9c] mb-6">
          Relevant Pages
        </h2>

        <ul className="space-y-4 text-gray-700">
          <li>
            <a
              href="https://www.researchgate.net/profile/Tekguel-Kalayci-3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 underline hover:text-purple-800"
            >
                
              ResearchGate
            </a>
          </li>

          <li>
            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=57210286141"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 underline hover:text-purple-800"
            >
              Scopus
            </a>
          </li>

          <li>
            <a
              href="https://scholar.google.com/citations?hl=en&user=EnSNGXQAAAAJ&view_op=list_works&sortby=pubdate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 underline hover:text-purple-800"
            >
                
              Google Scholar
            </a>
          </li>
          <li>
            <a
              href="https://orcid.org/0000-0002-8472-9792"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 underline hover:text-purple-800"
            >
                
              ORCID
            </a>
          </li>
          <li>
            <a
              href="https://www.webofscience.com/wos/author/record/46054556"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 underline hover:text-purple-800"
            >
                
              Web of Science
            </a>
          </li>
          <li>
            <a
              href="https://tr.linkedin.com/in/tekg%C3%BCl-kalayc%C4%B1-59851495"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 underline hover:text-purple-800"
            >
                
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}
