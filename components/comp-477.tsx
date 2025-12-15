"use client";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/TablePopup";
import { useParams, useRouter } from "next/navigation";

type Item = {
  id: string;
  name: string;
  email: string;
  location: string;
  flag: string;
  status: "Active" | "Inactive" | "Pending";
  balance: number;
};

const STATUS_OPTIONS: Item["status"][] = ["Active", "Pending", "Inactive"];

export default function TableComponent() {
  const { workspaceId } = useParams<{ workspaceId: string }>();
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(
        "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/users-01_fertyx.json"
      );
      const data = await res.json();
      setData(data.slice(0, 7)); // Limit to 5 items
    }
    fetchPosts();
  }, []);

  const columns: ColumnDef<Item>[] = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            aria-label="Select all"
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            aria-label="Select row"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
          />
        ),
      },
      {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
          <div className="font-medium">{row.getValue("name")}</div>
        ),
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "location",
        header: "Location",
        cell: ({ row }) => (
          <div>
            <span className="text-lg leading-none">{row.original.flag}</span>{" "}
            {row.getValue("location")}
          </div>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
          const currentStatus = row.getValue("status") as Item["status"];

          const statusClasses =
            currentStatus === "Active"
              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
              : currentStatus === "Pending"
              ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
              : "bg-zinc-700 text-zinc-100 border border-zinc-500/40";

          const handleStatusChange = (newStatus: Item["status"]) => {
            const rowId = row.original.id;
            setData((prev) =>
              prev.map((item) =>
                item.id === rowId ? { ...item, status: newStatus } : item
              )
            );
          };

          return (
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  <Badge
                    className={cn(
                      "px-2 py-0.5 text-xs cursor-pointer",
                      statusClasses
                    )}
                  >
                    {currentStatus}
                  </Badge>
                </button>
              </PopoverTrigger>

              {/* Tooltip-like popover, same style as your example */}
              <PopoverContent
                side="top"
                className="max-w-[220px] py-3 shadow-none bg-zinc-900 border border-zinc-800"
              >
                <div className="space-y-3">
                  <div className="space-y-1">
                    <p className="font-medium text-[13px]">Change status</p>
                    <p className="text-muted-foreground text-xs">
                      Select a new status for this row.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    {STATUS_OPTIONS.map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStatusChange(status);
                        }}
                        className={cn(
                          "h-7 w-full rounded px-2 text-left text-xs hover:bg-zinc-800",
                          status === currentStatus && "bg-zinc-800 text-white"
                        )}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          );
        },
      },
      {
        accessorKey: "balance",
        header: () => <div className="text-right">Balance</div>,
        cell: ({ row }) => {
          const amount = Number(row.getValue("balance") as number);
          const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount);
          return <div className="text-right">{formatted}</div>;
        },
      },
    ],
    [setData]
  );

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  const router = useRouter();

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="hover:bg-transparent" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                data-state={row.getIsSelected() && "selected"}
                key={row.id}
                onClick={()=> router.push(
  `/workspace/${workspaceId}/row/${row.id}`,
  { scroll: false }
)
}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                className="h-24 text-center"
                colSpan={table.getAllColumns().length}
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-right">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(data.reduce((total, item) => total + item.balance, 0))}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
