---
title: Installation
description: Install UAC Launch Control on Windows, macOS, or Linux.
---

**UAC Launch Control** is available for **[Windows](#windows)**, **[macOS](#macos)** and **[Linux](#linux)**.

## Windows

1. **Download the setup file from the [releases](https://github.com/mikkelrask/uaclaunchcontrol/releases).**  
Scroll down to **Assets** and find the Windows installer — ending with `.exe`.

2. **When download has finished, double click the downloaded file, follow any on screen instructions and the installer will take care of the rest.**

### Windows run warning

**Please note** that you will get a warning about **"Windows prevented an application from running"** when running an unsigned `.exe` file on your system.  
You will need to click **Run anyway** to be able to install the application.

---

## macOS

1. Download the `dmg`-image from the [releases](https://github.com/mikkelrask/uaclaunchcontrol/releases).  
Under **Assets** find the release ending with `.dmg`.

2. When the download finishes, double click the `.dmg` file to mount the image.
3. Drag-and-drop the **UAC Launch Control** app-icon to the **Applications** directory.

A `zip` version is also available for macOS if you prefer.

---

## Linux

On Linux you have different options, depending on your distro and what you want.

The **recommended way** is to use the `AppImage` from the **[Releases](https://github.com/mikkelrask/uaclaunchcontrol/releases)** page.

1. Scroll down to **Assets** and click the `.AppImage` version.  
This is a complete standalone file which requires no installation and gets updates from within the application itself.
2. When the download has finished, simply double click the AppImage file to open the application.

### Ubuntu/Debian/PopOS/Mint

If you don't want to use the AppImage version you can use the `.deb` package on all [Debian/Ubuntu derived distros](https://en.wikipedia.org/wiki/List_of_Linux_distributions#Debian-based).

1. Download the `.deb` from the **[Releases](https://github.com/mikkelrask/uaclaunchcontrol/releases)**.

2. Open a terminal, and install with `apt`:

```bash
sudo apt install /PATH/TO/DOWNLOAD/uac-launch-control_VERSION_amd64.deb
```

If you are unsure about `/PATH/TO/DOWNLOAD/` you can simply type the first part of the command, and drag-and-drop the file into the terminal window, then hit enter.  
*Take note of what version you're downloading, as this number changes on each update.

---

### Arch/CachyOS/Manjaro

A prebuilt binary has been released on the AUR, that always follows the builds here on GitHub.

1. Install with any **AUR-helper**, i.e `yay` or `paru`.

```sh
# If you use yay
yay -S uac-launch-control-bin

# If you use paru
paru uac-launch-control-bin
```

Alternatively you can also download the `PKGBUILD` from the AUR and install it manually, if you don't use a helper.

1. Clone the repo with `git`:

```
git clone https://aur.archlinux.org/uac-launch-control-bin.git
```

2. Change directory to the AUR repo:

```
cd uac-launch-control-bin
```

3. Run the build command:

```
makepkg -si
```

and just follow the on-screen instructions.

## Manually building the application

You can also download the entire repo and build the application manually.

See the **[Getting Started](/developers/#getting-started)** section of the **[For Developers](/developers/)** guide for instructions.
