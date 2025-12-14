import type { AnyFieldApi } from "@tanstack/react-form";

export function FieldInfo({ field }: { field: AnyFieldApi }) {
  const { isTouched, isValid, errors, isValidating } = field.state.meta;

  return (
    <>
      {isTouched && !isValid ? (
        <em>{errors.map((e) => e.message).join(", ")}</em>
      ) : null}
      {isValidating ? <span>Validating...</span> : null}
    </>
  );
}
