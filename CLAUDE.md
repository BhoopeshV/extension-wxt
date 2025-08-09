# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a browser extension project for JIRA integration built using the WXT framework. The project is currently in a minimal state with a basic background script.

## Development Commands

- `npm run dev` - Start development server for Chrome
- `npm run dev:firefox` - Start development server for Firefox
- `npm run build` - Build extension for Chrome
- `npm run build:firefox` - Build extension for Firefox
- `npm run zip` - Create distributable ZIP for Chrome
- `npm run zip:firefox` - Create distributable ZIP for Firefox
- `npm run postinstall` - Prepare WXT environment (runs automatically after npm install)

## Architecture

### Framework: WXT
This project uses WXT (Web Extension Toolkit) for building browser extensions. WXT provides:
- TypeScript support out of the box
- Cross-browser compatibility (Chrome/Firefox)
- Modern build tooling
- Entrypoint-based architecture

### Project Structure
- `entrypoints/` - Contains extension entry points
  - `background.ts` - Background script entry point (currently minimal)
- `package.json` - Project dependencies and scripts
- No configuration files present (using WXT defaults)

### Current State
The project is in initial setup phase with:
- Basic WXT framework configuration
- Single background script with console log
- No UI components, content scripts, or popup interfaces yet
- No JIRA-specific functionality implemented

## Development Notes

- The project uses WXT's convention-based approach where files in `entrypoints/` become extension entry points
- Additional entry points can be added by creating files in `entrypoints/` (e.g., `popup.html`, `content.ts`, `options.html`)
- TypeScript is supported by default
- The background script uses WXT's `defineBackground` helper for proper typing and setup