/** @type {import('next').NextConfig} */

import withNextIntl from 'next-intl/plugin';
const nextConfig = {};

const nextIntlConfig = withNextIntl();

export default nextIntlConfig(nextConfig);
