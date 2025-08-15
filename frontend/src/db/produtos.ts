export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Mouse Gamer RGB",
    descricao: "Mouse ergonômico com 6 botões e iluminação RGB.",
    preco: 149.99,
    imagem: "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    nome: "Teclado Mecânico",
    descricao: "Teclado com switches azul e keycaps PBT.",
    preco: 289.90,
    imagem: "https://www.zoing.com.br/media/catalog/product/cache/356405186860d79d6d10aa0f8b116a78/t/e/teclado-mecanico-gamer-redragon-ryze-rgb-abnt2-switch-brown-k633cgo-rgb-1.jpg",
  },
  {
    id: 3,
    nome: "Monitor 24'' Full HD",
    descricao: "Monitor com taxa de atualização de 75Hz e painel IPS.",
    preco: 899.00,
    imagem: "https://www.zoing.com.br/media/catalog/product/cache/be92b8e25865056949839570760ab1c7/m/o/monitor-lg-24-gamer-ultragear-full-hd-ips-hdmi-24gs60f-b-1_1.jpg",
  },
  {
    id: 4,
    nome: "Fone ",
    descricao: "Fone de ouvido infantil Trust Sonin Kids, Vermelho, T23585",
    preco: 249.50,
    imagem: "https://www.zoing.com.br/media/catalog/product/cache/356405186860d79d6d10aa0f8b116a78/h/e/headphone-trust-sonin-kids-red-t23585-1.jpg",
  },
  {
    id: 5,
    nome: "Webcam HD",
    descricao: "Webcam 1080p com microfone embutido para chamadas.",
    preco: 199.00,
    imagem: "https://intelbras.vteximg.com.br/arquivos/ids/164852-800-800/06-Persp-Esq.png?v=637880402041570000",
  },
  {
    id: 6,
    nome: "Cadeira Gamer",
    descricao: "Cadeira com ajustes ergonômicos e apoio lombar.",
    preco: 1299.90,
    imagem: "https://www.zoing.com.br/media/catalog/product/cache/be92b8e25865056949839570760ab1c7/c/a/cadeira-gamer-br-x-br-702-preto-vermelho-reclinavel-com-almofadas-br-702red-1_1.jpg",
  },
  {
    id: 7,
    nome: "Microfone USB",
    descricao: "Microfone condensador ideal para podcasts e streaming.",
    preco: 349.00,
    imagem: "https://www.zoing.com.br/media/catalog/product/cache/356405186860d79d6d10aa0f8b116a78/m/i/microfone-trust-gamer-streamer-gxt-258-fyru-led-usb-23465-1.jpg",
  },
  {
    id: 8,
    nome: "Notebook i5 11ª Geração",
    descricao: "Notebook com 8GB RAM, SSD 512GB e Windows 11.",
    preco: 3999.00,
    imagem: "https://www.zoing.com.br/media/catalog/product/cache/be92b8e25865056949839570760ab1c7/n/o/notebook-hp-250-g9-intel-core-i5-1235u-8gb-256gb-ssd-1.jpg",
  },
  {
    id: 9,
    nome: "Hub USB-C",
    descricao: "Hub com 4 portas USB 3.0 e entrada HDMI.",
    preco: 129.90,
    imagem: "https://www.zoing.com.br/media/catalog/product/cache/be92b8e25865056949839570760ab1c7/h/u/hub-usb-c3tech-hu-300bk-4-portas-usb-3-0-hu-300bk-1.jpg",
  },
  {
    id: 10,
    nome: "Carregador Portátil 10.000mAh",
    descricao: "Power bank com duas saídas USB e carregamento rápido.",
    preco: 89.99,
    imagem: "https://cdn.awsli.com.br/2500x2500/679/679395/produto/158035982c681e9972d.jpg",
  },
  {
    id: 11,
    nome: "Smartwatch",
    descricao: "Relógio inteligente com monitoramento de saúde.",
    preco: 299.90,
    imagem: "https://mirandacomputacao.jetassets.com.br/produto/47856-principal.png",
  },
  {
    id: 12,
    nome: "Suporte para Notebook",
    descricao: "Base ajustável para notebooks até 17 polegadas.",
    preco: 79.90,
    imagem: "https://www.zoing.com.br/media/catalog/product/cache/be92b8e25865056949839570760ab1c7/s/u/suporte-para-notebook-letron-shine-ate-17-3-silencioso-com-2-fans-preto-1.jpg",
  },
  {
    id: 13,
    nome: "SSD 1TB",
    descricao: "SSD NVMe com velocidade de leitura de até 3500MB/s.",
    preco: 599.00,
    imagem: "https://www.zoing.com.br/media/catalog/product/cache/be92b8e25865056949839570760ab1c7/s/s/ssd-western-digital-wd-green-1tb-sata-iii-wds100t3g0a-1.jpg",
  },
  {
    id: 14,
    nome: "HD Externo 2TB",
    descricao: "HD portátil USB 3.0 ideal para backups.",
    preco: 379.00,
    imagem: "https://img.kalunga.com.br/fotosdeprodutos/229889z_1.jpg",
  },
  {
    id: 15,
    nome: "Placa de Vídeo RTX 3060",
    descricao: "GPU com 12GB GDDR6, ideal para jogos em Full HD.",
    preco: 2299.00,
    imagem: "https://www.zoing.com.br/media/catalog/product/cache/be92b8e25865056949839570760ab1c7/p/l/placa-de-video-galax-geforce-rtx-3060-1-click-oc-lhr-12gb-gddr6-192bit-36nol7md1voc-1.jpg",
  },
  {
    id: 16,
    nome: "Processador Ryzen 5 5600G",
    descricao: "Processador com gráficos integrados Vega 7.",
    preco: 899.00,
    imagem: "https://www.zoing.com.br/media/catalog/product/cache/be92b8e25865056949839570760ab1c7/p/r/processador-amd-ryzen-5-5600g-3-9ghz-4-4ghz-turbo-cache-16mb-am4-video-1.jpg",
  },
  {
    id: 17,
    nome: "Fonte 650W 80 Plus Bronze",
    descricao: "Fonte com PFC Ativo e certificação de eficiência.",
    preco: 369.00,
    imagem: "https://www.zoing.com.br/media/catalog/product/cache/be92b8e25865056949839570760ab1c7/f/o/fonte-atx-gamdias-cyclops-m1-650b-650w-80-plus-bronze-1.jpg",
  },
  {
    id: 18,
    nome: "Gabinete Mid Tower",
    descricao: "Gabinete com vidro temperado e 3 fans RGB inclusos.",
    preco: 319.90,
    imagem: "https://www.zoing.com.br/media/catalog/product/cache/be92b8e25865056949839570760ab1c7/g/a/gabinete-gamer-c3tech-mt-g850bk-mid-tower-vidro-temperado-preto-sem-fan-mt-g850bk-1.jpg",
  },
  {
    id: 19,
    nome: "Placa Mãe B550",
    descricao: "Compatível com Ryzen e suporte a M.2 NVMe.",
    preco: 799.00,
    imagem: "https://www.zoing.com.br/media/catalog/product/cache/be92b8e25865056949839570760ab1c7/p/l/placa-m-e-gigabyte-b550m-k-chipset-b550-amd-am4-matx-ddr4-1.jpg",
  },
  {
    id: 20,
    nome: "Memória RAM 16GB DDR4",
    descricao: "2x8GB com frequência de 3200MHz.",
    preco: 439.90,
    imagem: "https://www.zoing.com.br/media/catalog/product/cache/be92b8e25865056949839570760ab1c7/m/e/memoria-ram-p-notebook-win-memory-16gb-ddr4-2666mhz-wdm28s6azd-1.jpg",
  },
];
