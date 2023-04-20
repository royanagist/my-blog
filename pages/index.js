import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className="p-5 border border-primary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="fw-bold">
          <span className="text-primary">WebDev</span> News
        </h1>
        <p>Keep up to date with the latest web dev news</p>
      </div>

      <div className="d-grid gap-2 col-6 ">
        <button
          className="mt-3 btn btn-primary"
          onClick={() => router.push('/article?page=1')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
