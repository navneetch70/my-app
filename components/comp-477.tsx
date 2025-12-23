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
import { theme } from "@/app/theme/theme";
import { getTasks } from "@/app/api/workspace.api";
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

const STATUS_STYLE: Record<
  Item["status"],
  { bg: string; text: string; border: string }
> = {
  Active: {
    // Green (success)
    bg: "rgba(46, 125, 50, 0.12)",
    text: "#2e7d32",
    border: "rgba(46, 125, 50, 0.35)",
  },

  Pending: {
    // Yellow / Amber (warning)
    bg: "rgba(237, 176, 32, 0.14)",
    text: "#b28704",
    border: "rgba(237, 176, 32, 0.45)",
  },

  Inactive: {
    // Red (error)
    bg: "rgba(211, 47, 47, 0.12)",
    text: "#d32f2f",
    border: "rgba(211, 47, 47, 0.35)",
  },
};

export default function TableComponent({
  month,
  locationId,
  source,
}: {
  month: string;
  locationId?: string;
  source?: string;
}) {
  const { workspaceId } = useParams<{ workspaceId: string }>();
  const [data, setData] = useState<Item[]>([]);
  const router = useRouter();

  useEffect(() => {
    getTasks(locationId || "", source || "", month).then((response) => {
      setData(response.data);
    });
  }, [locationId, source, month]);

  console.log("TABLE DATA ", data);

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
          <div style={{ color: theme.text.primary }}>
            {row.getValue("name")}
          </div>
        ),
      },
      {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => (
          <span style={{ color: theme.text.secondary }}>
            {row.getValue("email")}
          </span>
        ),
      },
      // {
      //   accessorKey: "location",
      //   header: "Location",
      //   cell: ({ row }) => (
      //     <span style={{ color: theme.text.secondary }}>
      //       <span className="mr-1">{row.original.flag}</span>
      //       {row.getValue("location")}
      //     </span>
      //   ),
      // },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
          const currentStatus = row.getValue("status") as Item["status"];

          const handleStatusChange = (newStatus: Item["status"]) => {
            setData((prev) =>
              prev.map((item) =>
                item.id === row.original.id
                  ? { ...item, status: newStatus }
                  : item
              )
            );
          };

          const style = STATUS_STYLE[currentStatus];

          return (
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  <Badge
                    className="px-2 py-0.5 text-xs cursor-pointer"
                    style={{
                      backgroundColor: style.bg,
                      color: style.text,
                      border: `1px solid ${style.border}`,
                    }}
                  >
                    {currentStatus}
                  </Badge>
                </button>
              </PopoverTrigger>

              <PopoverContent
                side="top"
                className="max-w-[220px] py-3 shadow-none"
                style={{
                  backgroundColor: theme.surface.modal,
                  border: `1px solid ${theme.border.default}`,
                  color: theme.text.primary,
                }}
              >
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Change status</p>
                    <p className="text-xs" style={{ color: theme.text.muted }}>
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
                        className="h-7 w-full rounded px-2 text-left text-xs"
                        style={{
                          backgroundColor:
                            status === currentStatus
                              ? theme.surface.elevated
                              : "transparent",
                          color: theme.text.primary,
                        }}
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
          const amount = Number(row.getValue("balance"));
          const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount);

          return (
            <div className="text-right" style={{ color: theme.text.secondary }}>
              {formatted}
            </div>
          );
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

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((group) => (
            <TableRow key={group.id}>
              {group.headers.map((header) => (
                <TableHead
                  key={header.id}
                  style={{
                    color: theme.text.muted,
                    borderBottom: `1px solid ${theme.border.default}`,
                  }}
                >
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
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() =>
                  router.push(`/workspace/${workspaceId}/row/${row.id}`, {
                    scroll: false,
                  })
                }
                style={{
                  cursor: "pointer",
                  backgroundColor: row.getIsSelected()
                    ? theme.surface.elevated
                    : "transparent",
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    style={{
                      borderBottom: `1px solid ${theme.border.subtle}`,
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={table.getAllColumns().length}
                className="h-24 text-center"
                style={{ color: theme.text.muted }}
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
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
