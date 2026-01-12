/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Directory - Path to the directory to monitor */
  directory: string;
  /** Limit - Number of recent files to show */
  limit: string;
  /** Editor - App to open files with. Leave empty for system default. */
  editor?: import("@raycast/api").Application;
  /** Show Preview - Show file content preview in detail panel */
  showPreview: boolean;
};

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences;

declare namespace Preferences {
  /** Preferences accessible in the `index` command */
  export type Index = ExtensionPreferences & {};
}

declare namespace Arguments {
  /** Arguments passed to the `index` command */
  export type Index = {};
}
