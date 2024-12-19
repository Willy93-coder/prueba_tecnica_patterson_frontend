import { Button } from "../button/button";

type PaginationProps = {
  prevPage: string | null;
  nextPage: string | null;
  onPageChange: (url: string | null) => void;
};

export function Pagination({
  prevPage,
  nextPage,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex gap-x-4 mb-6">
      <Button
        type="button"
        onClick={() => onPageChange(prevPage)}
        text="Anterior"
        disabled={!prevPage}
      />
      <Button
        type="button"
        onClick={() => onPageChange(nextPage)}
        text="Siguiente"
        disabled={!nextPage}
      />
    </div>
  );
}
