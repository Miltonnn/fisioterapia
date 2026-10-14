export const siteSections = {
  servicos: true,
  produtos: false,
  blog: false,
};

export type SiteSection = keyof typeof siteSections;

export function isSectionEnabled(section?: SiteSection) {
  return section ? siteSections[section] : true;
}
