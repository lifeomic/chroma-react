import * as React from 'react';

export const Jira = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      width={24}
      height={24}
      data-icon="jira-custom"
      {...props}
    >
      <path d="M19.522 3.851h-8.207a3.723 3.723 0 003.705 3.705h1.512v1.459a3.723 3.723 0 003.7 3.7V4.563a.716.716 0 00-.71-.712z" />
      <path d="M15.462 7.94H7.254a3.723 3.723 0 003.7 3.7h1.512v1.465a3.722 3.722 0 003.705 3.7V8.653a.716.716 0 00-.709-.713z" />
      <path d="M11.4 12.028H3.191a3.722 3.722 0 003.705 3.7h1.517v1.46a3.723 3.723 0 003.7 3.7v-8.149a.715.715 0 00-.713-.711z" />
    </svg>
  );
};
