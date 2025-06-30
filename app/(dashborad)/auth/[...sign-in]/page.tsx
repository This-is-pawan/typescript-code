export default function SignInPage({ params }: { params: { 'sign-in': string[] } }) {
  const slug = params['sign-in'];

  return (
    <div>
      <h1 className="text-2xl">
        Sign In: {slug?.[1] ?? 'No segment'}
      </h1>
    </div>
  );
}
