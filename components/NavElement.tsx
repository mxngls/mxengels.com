import Link from "next/link";

export default function NavElement({
  reference,
  content,
}: {
  reference: string;
  content: string;
}) {
  return (
    <li>
      <Link href={reference}>
        <a>{content}</a>
      </Link>
    </li>
  );
}
