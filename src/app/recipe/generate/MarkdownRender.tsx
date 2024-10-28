"use client";
import Markdown from "react-markdown";

const MarkdownRender = ({ content }: { content: string }) => {
  return (
    <Markdown
      components={{
        h1: ({ ...props }) => (
          <h1 className="text-xl font-bold font-space my-5" {...props} />
        ),
        h2: ({ ...props }) => (
          <h2
            className="text-3xl underline font-bold font-space my-4"
            {...props}
          />
        ),
        h3: ({ ...props }) => (
          <h3 className="text-lg font-bold font-space my-3" {...props} />
        ),
        p: ({ ...props }) => (
          <p className="text-lg font-medium font-urbanist my-2" {...props} />
        ),
        ul: ({ ...props }) => <ul className="list-disc ml-5" {...props} />,
        ol: ({ ...props }) => <ol className="list-decimal ml-5" {...props} />,
        li: ({ ...props }) => (
          <li className="text-lg font-medium font-urbanist my-2" {...props} />
        ),
        blockquote: ({ ...props }) => (
          <blockquote className="border-l-4 border-black p-2 my-3" {...props} />
        ),
        table: ({ ...props }) => (
          <table className="border-collapse w-full my-5" {...props} />
        ),
        th: ({ ...props }) => (
          <th className="border border-black font-semibold p-2" {...props} />
        ),
        td: ({ ...props }) => (
          <td className="border border-black p-2" {...props} />
        ),
      }}
    >
      {content}
    </Markdown>
  );
};
export default MarkdownRender;
