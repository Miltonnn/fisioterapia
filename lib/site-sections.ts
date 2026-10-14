export const siteSections = {
  servicos: true,
  produtos: false,
  blog: true,
};

export type SiteSection = keyof typeof siteSections;

export function isSectionEnabled(section?: SiteSection) {
  return section ? siteSections[section] : true;
}
