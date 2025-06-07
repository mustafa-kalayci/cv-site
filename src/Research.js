export default function ResearchInterests() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-[#744f9c] mb-10">
        Research Interests
      </h1>

      <ul className=" pl-6 space-y-8 text-gray-700 leading-relaxed">

        <li>
          <h2 className="text-xl font-semibold text-purple-700 mb-2">
            Polynomials over Finite Fields
          </h2>
          <p>
            Factorization of polynomials over finite fields, permutation polynomials and their applications to coding theory and cryptography.
          </p>
        </li>

        <li>
          <h2 className="text-xl font-semibold text-purple-700 mb-2">
            Coding Theory
          </h2>
          <p>
            Linear codes, quasi-cyclic codes, linear complementary dual (LCD) codes, linear complementary pair (LCP) of codes, hull of linear codes.
          </p>
        </li>

        <li>
          <h2 className="text-xl font-semibold text-purple-700 mb-2">
           Cryptographically Significant Functions and Related Combinatorial Objects
          </h2>
          <p>
            Functions with high nonlinearity, almost perfect nonlinear functions, bent functions, generalized bent functions and their connection to coding theory, cryptography and combinatorial objects (such as designs, difference sets, graphs, packings and association schemes).
          </p>
        </li>

      </ul>
    </section>
  );
}