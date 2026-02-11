import clsx from "clsx";

export default function ErrorState({ error, resetErrorBoundary, className }) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center p-8  text-center bg-red-50 border border-red-100 rounded-lg m-4",
        className,
      )}
    >
      <div className="text-4xl mb-4">⚠️</div>
      <h2 className="text-xl font-bold text-red-800">مشکلی پیش آمده!</h2>
      <p className="text-red-600 my-4 text-sm">
        {error?.message || "خطای ناشناخته"}
      </p>
      {resetErrorBoundary ? (
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          تلاش مجدد
        </button>
      ) : (
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-white border border-gray-300 rounded"
        >
          رفرش صفحه
        </button>
      )}
    </div>
  );
}
