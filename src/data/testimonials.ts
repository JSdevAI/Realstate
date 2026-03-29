export interface Testimonial {
  id: string;
  text: string;
  name: string;
  location: string;
  avatarUrl: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    text: '"O André Araújo superou todas as expectativas. O processo de venda foi rápido, organizado e sempre estivemos informados de cada passo. Recomendo a 100%!"',
    name: 'Ricardo Silva',
    location: 'Vila Nova de Famalicão',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBghPU7QpPw19gvhKAyyHrnbWVNeLMSRD_Qkw85OwWc2EE8seI99gH4-URfkHuWmAbtw6VtEHUqG1XIyWPI7iC6va4dJWclkWzQ7p-hQklRLbbSkWZKxUJnxRPb823YXPYoV55c9gDUz3p81rkJFTIt61EFpzOs0NAhvNwWMDSvEN2BJCp4UcDBpuMqAJGO8JDH0QNpgoQdMq-swxGhvuhYHb6rsI1D9sfQi23nOGHV01LdSR_peT2U_pTZgDRVaKYu2pOuzCYpMYC0',
    rating: 5,
  },
  {
    id: '2',
    text: '"Comprar casa pode ser stressante, mas com o acompanhamento da equipa AA foi tudo muito tranquilo. A transparência foi total do início ao fim."',
    name: 'Maria Henriques',
    location: 'Braga',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD58PH-1gPwDuchEZ4RuwjeziBqlLSP1DZa80D-g5NYUxRJt1AU-Hw-T8mb02Wi-nzRikaDuDESL0_g-AvSuSD2Dt8Tgxih8s483TBZYz3jC3CKA7GGczP0QGBW1LCk5HloASm-r9dCQPU1mclqQY97aGGz90XhcqWx85AWF_0Q6p3_c_q_BFU1Zp9-nwl5LcuiX0-NAgvmAjEmYx6cKB30NARJgVWygBdbDDUYr4yqCx_DCxbjIEVq4f1-IqkiEr0GijoV5ULUw3i',
    rating: 5,
  }
];
