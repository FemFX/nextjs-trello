"use client";

import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { db } from "@/lib/db";

const OrganizationIdPage = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <div className="flex flex-col space-y-4">
      <form action={onSubmit}>
        <div className="flex flex-col space-y-2">
          <input
            id="title"
            name="title"
            required
            placeholder="Enter a board title"
            className="border-black border p-1"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default OrganizationIdPage;
