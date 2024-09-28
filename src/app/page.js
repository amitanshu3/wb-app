import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          Welcome to the Job and Skill Platform!
        </h1>
        <p className="text-lg">
          This platform is designed to help you find the perfect job
          opportunities, test your skills, and apply for internships. Use the
          sidebar to navigate through different sections like the Dashboard,
          Skill Test, and Internship pages.
        </p>
      </div>
    </Layout>
  );
}
