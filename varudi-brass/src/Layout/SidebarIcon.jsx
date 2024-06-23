import React from "react";

const SidebarIcon = ({ iconName, fill }) => {
  const icons = {
    "Dashboard": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M11 6.41663V15.5833"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.41675 11H15.5834"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.24992 20.1667H13.7499C18.3333 20.1667 20.1666 18.3334 20.1666 13.75V8.25004C20.1666 3.66671 18.3333 1.83337 13.7499 1.83337H8.24992C3.66659 1.83337 1.83325 3.66671 1.83325 8.25004V13.75C1.83325 18.3334 3.66659 20.1667 8.24992 20.1667Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.16675 15.5833H12.8334C14.3459 15.5833 15.5834 14.3458 15.5834 12.8333V9.16663C15.5834 7.65413 14.3459 6.41663 12.8334 6.41663H9.16675C7.65425 6.41663 6.41675 7.65413 6.41675 9.16663V12.8333C6.41675 14.3458 7.65425 15.5833 9.16675 15.5833Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    "Master": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M8.24992 20.1667H13.7499C18.3333 20.1667 20.1666 18.3334 20.1666 13.75V8.25004C20.1666 3.66671 18.3333 1.83337 13.7499 1.83337H8.24992C3.66659 1.83337 1.83325 3.66671 1.83325 8.25004V13.75C1.83325 18.3334 3.66659 20.1667 8.24992 20.1667Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6635 11H14.6717"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.9958 11H11.004"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.3283 11H7.33653"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    "Voucher": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M7.33325 1.83337V4.58337"
          stroke={fill}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6667 1.83337V4.58337"
          stroke={fill}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.25 7.79171V15.5834C19.25 18.3334 17.875 20.1667 14.6667 20.1667H7.33333C4.125 20.1667 2.75 18.3334 2.75 15.5834V7.79171C2.75 5.04171 4.125 3.20837 7.33333 3.20837H14.6667C17.875 3.20837 19.25 5.04171 19.25 7.79171Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.33325 10.0834H14.6666"
          stroke={fill}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.33325 14.6666H10.9999"
          stroke={fill}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    "Books": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M3.20825 16.5V6.41671C3.20825 2.75004 4.12492 1.83337 7.79158 1.83337H14.2083C17.8749 1.83337 18.7916 2.75004 18.7916 6.41671V15.5834C18.7916 15.7117 18.7916 15.84 18.7824 15.9684"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.82075 13.75H18.7916V16.9583C18.7916 18.7275 17.3524 20.1667 15.5833 20.1667H6.41658C4.64742 20.1667 3.20825 18.7275 3.20825 16.9583V16.3625C3.20825 14.9233 4.38159 13.75 5.82075 13.75Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.33325 6.41663H14.6666"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.33325 9.625H11.9166"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    "Reports": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M18.3334 7.56254V16.5C18.3334 19.25 16.6926 20.1667 14.6667 20.1667H7.33341C5.30758 20.1667 3.66675 19.25 3.66675 16.5V7.56254C3.66675 4.58337 5.30758 3.89587 7.33341 3.89587C7.33341 4.46421 7.56256 4.97754 7.93839 5.35337C8.31422 5.7292 8.82758 5.95837 9.39591 5.95837H12.6042C13.7409 5.95837 14.6667 5.03254 14.6667 3.89587C16.6926 3.89587 18.3334 4.58337 18.3334 7.56254Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6666 3.89587C14.6666 5.03254 13.7408 5.95837 12.6041 5.95837H9.39575C8.82742 5.95837 8.31406 5.7292 7.93823 5.35337C7.56239 4.97754 7.33325 4.46421 7.33325 3.89587C7.33325 2.75921 8.25909 1.83337 9.39575 1.83337H12.6041C13.1724 1.83337 13.6858 2.06254 14.0616 2.43838C14.4374 2.81421 14.6666 3.32754 14.6666 3.89587Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.33325 11.9166H10.9999"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.33325 15.5834H14.6666"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    "Settings": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M11 13.75C12.5188 13.75 13.75 12.5188 13.75 11C13.75 9.48122 12.5188 8.25 11 8.25C9.48122 8.25 8.25 9.48122 8.25 11C8.25 12.5188 9.48122 13.75 11 13.75Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.83325 11.8066V10.1933C1.83325 9.23998 2.61242 8.45165 3.57492 8.45165C5.23408 8.45165 5.91242 7.27832 5.07825 5.83915C4.60158 5.01415 4.88575 3.94165 5.71992 3.46498L7.30575 2.55748C8.02992 2.12665 8.96492 2.38332 9.39575 3.10748L9.49658 3.28165C10.3216 4.72082 11.6783 4.72082 12.5124 3.28165L12.6133 3.10748C13.0441 2.38332 13.9791 2.12665 14.7033 2.55748L16.2891 3.46498C17.1233 3.94165 17.4074 5.01415 16.9307 5.83915C16.0966 7.27832 16.7749 8.45165 18.4341 8.45165C19.3874 8.45165 20.1758 9.23082 20.1758 10.1933V11.8066C20.1758 12.76 19.3966 13.5483 18.4341 13.5483C16.7749 13.5483 16.0966 14.7216 16.9307 16.1608C17.4074 16.995 17.1233 18.0583 16.2891 18.535L14.7033 19.4425C13.9791 19.8733 13.0441 19.6166 12.6133 18.8925L12.5124 18.7183C11.6874 17.2791 10.3308 17.2791 9.49658 18.7183L9.39575 18.8925C8.96492 19.6166 8.02992 19.8733 7.30575 19.4425L5.71992 18.535C4.88575 18.0583 4.60158 16.9858 5.07825 16.1608C5.91242 14.7216 5.23408 13.5483 3.57492 13.5483C2.61242 13.5483 1.83325 12.76 1.83325 11.8066Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    "Activity Log": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M8.24992 20.1667H13.7499C18.3333 20.1667 20.1666 18.3334 20.1666 13.75V8.25004C20.1666 3.66671 18.3333 1.83337 13.7499 1.83337H8.24992C3.66659 1.83337 1.83325 3.66671 1.83325 8.25004V13.75C1.83325 18.3334 3.66659 20.1667 8.24992 20.1667Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.2083 16.9583C15.2167 16.9583 16.0417 16.1333 16.0417 15.125V6.87496C16.0417 5.86663 15.2167 5.04163 14.2083 5.04163C13.2 5.04163 12.375 5.86663 12.375 6.87496V15.125C12.375 16.1333 13.1908 16.9583 14.2083 16.9583Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.79159 16.9584C8.79992 16.9584 9.62492 16.1334 9.62492 15.125V11.9167C9.62492 10.9084 8.79992 10.0834 7.79159 10.0834C6.78325 10.0834 5.95825 10.9084 5.95825 11.9167V15.125C5.95825 16.1334 6.77409 16.9584 7.79159 16.9584Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  const selectedIcon = icons[iconName] || null;

  return <React.Fragment>{selectedIcon}</React.Fragment>;
};

export default SidebarIcon;
