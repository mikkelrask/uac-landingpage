// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://uac-launch-control.pages.dev",
	integrations: [
		starlight({
			title: "UAC SOFT",
			description:
				"Documentation for UAC Launch Control — a cross-platform modded Doom source port launcher.",
			logo: {
				src: "./public/uac-logo.svg",
				alt: "UAC Logo",
				replacesTitle: false,
			},
			favicon: "/favicon.svg",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/mikkelrask/uaclaunchcontrol",
				},
			],
			customCss: ["./src/styles/uac-theme.css"],
			sidebar: [
				{ label: "Home", slug: "" },
				{
					label: "Getting Started",
					items: [
						{ label: "Overview", slug: "getting-started" },
						{ label: "Installation", slug: "installation" },
					],
				},
				{
					label: "Guides",
					items: [
						{ label: "Manage Source Ports", slug: "guides/source-ports" },
						{ label: "Add Mod Files", slug: "guides/mod-files" },
						{ label: "Add Base Game WAD", slug: "guides/base-game-wad" },
					],
				},
				{
					label: "Reference",
					items: [
						{ label: "Settings", slug: "reference/settings" },
						{ label: "Theming", slug: "reference/theming" },
						{
							label: "Keyboard Shortcuts",
							slug: "reference/keyboard-shortcuts",
						},
						{ label: "UAC Registry", slug: "reference/uac-registry" },
					],
				},
				{ label: "For Developers", slug: "developers" },
			],
		}),
	],
});
