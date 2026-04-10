"use client";

import { useEffect, useState } from "react";

interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  company?: string;
  joinedAt: string;
}

export default function AdminWaitlist() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchEntries = async () => {
    const res = await fetch("/api/waitlist");
    const data = await res.json();
    setEntries(data.entries);
    setLoading(false);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Remove this entry from the waitlist?")) return;
    setDeleting(id);
    await fetch(`/api/waitlist?id=${id}`, { method: "DELETE" });
    await fetchEntries();
    setDeleting(null);
  };

  const handleExport = () => {
    const header = "Name,Email,Company,Joined At\n";
    const rows = entries
      .map((e) =>
        `"${e.name}","${e.email}","${e.company || ""}","${new Date(e.joinedAt).toLocaleString()}"`
      )
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "waitlist.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Waitlist</h1>
            <p className="text-gray-500 text-sm mt-1">
              {loading ? "Loading..." : `${entries.length} total sign-ups`}
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/"
              className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
            >
              ← Back to site
            </a>
            {entries.length > 0 && (
              <button
                onClick={handleExport}
                className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-medium"
              >
                Export CSV
              </button>
            )}
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading...</div>
        ) : entries.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
            <p className="text-gray-400 text-lg">No sign-ups yet.</p>
            <p className="text-gray-300 text-sm mt-1">Share the site to start collecting emails.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 font-semibold text-gray-600">#</th>
                  <th className="text-left px-6 py-3 font-semibold text-gray-600">Name</th>
                  <th className="text-left px-6 py-3 font-semibold text-gray-600">Email</th>
                  <th className="text-left px-6 py-3 font-semibold text-gray-600">Company</th>
                  <th className="text-left px-6 py-3 font-semibold text-gray-600">Joined</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {entries.map((entry, i) => (
                  <tr key={entry.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-400">{i + 1}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{entry.name}</td>
                    <td className="px-6 py-4 text-gray-600">{entry.email}</td>
                    <td className="px-6 py-4 text-gray-500">{entry.company || "—"}</td>
                    <td className="px-6 py-4 text-gray-400">
                      {new Date(entry.joinedAt).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDelete(entry.id)}
                        disabled={deleting === entry.id}
                        className="text-red-400 hover:text-red-600 transition-colors text-xs font-medium disabled:opacity-40"
                      >
                        {deleting === entry.id ? "Removing..." : "Remove"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
