"use client";

import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core";
import { useTree } from "@headless-tree/react";
import { Dock, FolderIcon, FolderOpenIcon } from "lucide-react";
import { Tree, TreeItem, TreeItemLabel } from "./SideNavTree";
import { theme } from "@/app/theme/theme";

interface Item {
  name: string;
  children?: string[];
}

const items: Record<string, Item> = {
  backend: { name: "Dev Tasks Sprint 2025" },
  company: {
    children: ["engineering"],
    name: "Company",
  },
  components: { name: "Components" },
  content: { name: "Content" },
  "design-system": { name: "Design System" },
  engineering: {
    children: ["frontend", "backend", "platform-team"],
    name: "Favourites",
  },
  finance: { name: "Finance" },
  frontend: { name: "Product Roadmap 2026" },
  guidelines: { name: "Guidelines" },
  hr: { name: "HR" },
  infrastructure: { name: "Infrastructure" },
  marketing: { name: "Marketing" },
  operations: { name: "Operations" },
  "platform-team": { name: "Design System Board" },
  seo: { name: "SEO" },
  tokens: { name: "Tokens" },
  "web-platform": { name: "Web Platform" },
};

const indent = 20;

export default function Component() {
  const tree = useTree<Item>({
    dataLoader: {
      getChildren: (itemId) => items[itemId].children ?? [],
      getItem: (itemId) => items[itemId],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
    getItemName: (item) => item.getItemData().name,
    indent,
    initialState: {
      expandedItems: ["engineering", "frontend", "design-system"],
    },
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    rootItemId: "company",
  });

  return (
    <div
      style={{ width: "100%" }}
      className="flex w-full flex-col gap-2 *:first:grow py-4"
    >
      <div style={{ width: "100%" }} className="w-full pt-4 px-4">
        <Tree
          className="before:-ms-1 relative before:absolute before:inset-0 bg-black)]"
          indent={indent}
          tree={tree}
          style={{ color: theme.text.secondary }}
        >
          {tree.getItems().map((item) => {
            return (
              <TreeItem item={item} key={item.getId()}>
                <TreeItemLabel
                  style={{ color: theme.text.secondary }}
                  className="before:-inset-y-0.5 before:-z-10 relative before:absolute before:inset-x-0 "
                >
                  <span className="-order-1 flex flex-1 items-center gap-2">
                    {item.isFolder() ? (
                      item.isExpanded() ? (
                        <FolderOpenIcon
                          style={{ color: theme.icon.muted }}
                          className="pointer-events-none size-4"
                        />
                      ) : (
                        <FolderIcon
                          style={{ color: theme.icon.muted }}
                          className="pointer-events-none size-4"
                        />
                      )
                    ) : (
                      <Dock
                        style={{ color: theme.icon.muted }}
                        className="pointer-events-none size-4"
                      />
                    )}

                    {item.getItemName()}
                  </span>
                </TreeItemLabel>
              </TreeItem>
            );
          })}
        </Tree>
      </div>
    </div>
  );
}
