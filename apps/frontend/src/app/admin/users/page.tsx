// app/admin/users/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "online" | "offline";
  city: string;
  country: string;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Simulate fetch from DB (replace with server action later)
    setUsers([
      {
        id: "u1",
        name: "Alice",
        email: "alice@example.com",
        role: "user",
        status: "online",
        city: "Mumbai",
        country: "India",
      },
      {
        id: "u2",
        name: "Bob",
        email: "bob@example.com",
        role: "manager",
        status: "offline",
        city: "London",
        country: "UK",
      },
    ]);
  }, []);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">All Users</h2>
        <Input
          placeholder="Search by name/email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-64"
        />
      </div>

      <ScrollArea className="max-h-[70vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((user) => (
            <Card key={user.id} className="border bg-muted shadow-md">
              <CardContent className="p-4">
                <div className="font-semibold text-lg">{user.name}</div>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <p className="text-xs mt-1">
                  {user.city}, {user.country}
                </p>
                <p className="text-xs mt-1">Role: {user.role}</p>
                <p className="text-xs mt-1">Status: {user.status}</p>
                <Button size="sm" variant="outline" className="mt-2">
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
