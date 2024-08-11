// src/components/government/ministry/Breadcrumb.js
import BreadcrumbNavBar from "../../global/BreadcrumbNavBar";

export default function ExamplePage() {
  const breadcrumbs = [
    { label: "...", href: "/" },
    { label: "Government", href: "/government/" },
    {
      label: "Ministry",
      href: "/government/ministry",
    },
  ];

  return (
    <div>
      <BreadcrumbNavBar breadcrumbs={breadcrumbs} />
      {/* Other page content */}
    </div>
  );
}
