function Produtos() {

    const produtos = [
        {
            "id": 1,
            "nome": "BASE WEPINK",
            "preco": 193.93,
            "avaliacao": 3.8,
            "imagem": "https://wepink.vtexassets.com/arquivos/ids/156503-800-800?v=638147132383370000&width=800&height=800&aspect=true"
        },
        {
            "id": 2,
            "nome": "ESPUMA FACIAL WEPINK",
            "preco": 125.93,
            "avaliacao": 4.8,
            "imagem": "https://wepink.vtexassets.com/arquivos/ids/156287-800-auto?v=638056338328930000&width=800&height=auto&aspect=true"
        },
        {
            "id": 3,
            "nome": "PERFUME VF RED WEPINK",
            "preco": 249.65,
            "avaliacao": 4.5,
            "imagem": "https://wepink.vtexassets.com/arquivos/ids/155977-800-auto?v=637877103679300000&width=800&height=auto&aspect=true"
        },
        {
            "id": 4,
            "nome": "PERFUME VF WEPINK",
            "preco": 249.65,
            "avaliacao": 4.4,
            "imagem": "https://wepink.vtexassets.com/arquivos/ids/156357/acqua-2.png?v=638108763926800000"
        },
        {

            "id": 5,
            "nome": "KIT FACIAL WEPINK",
            "preco": 310.59,
            "avaliacao": 4.7,
            "imagem": "https://wepink.vtexassets.com/arquivos/ids/156368-800-800?v=638119870080700000&width=800&height=800&aspect=true"
        },
        {

            "id": 6,
            "nome": "SÉRUM HIDRATANTE NEUTROGENA",
            "preco": 92.90,
            "avaliacao": 4.5,
            "imagem": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTOUj6W7TcQIobSI6pPw9gcoXqYr6Mt-A4MmzuFRHKLyFI4eIDyUD_xDGafnJRuu_RRLRD6rK-9d1IIQhFUiMzOzMrJ2W8Xt88qGWa5gFWx6a0KSd4GAa8Y&usqp=CAE"
        },
        {

            "id": 7,
            "nome": "GEL DE LIMPEZA NEUTROGENA",
            "preco": 29.35,
            "avaliacao": 4.3,
            "imagem": "https://drogariasp.vteximg.com.br/arquivos/ids/799454-1000-1000/116661---gel-limpeza-profunda-neutrogena-deep-clean-150g-1.jpg?v=638025871014630000"
        },
        {

            "id": 8,
            "nome": "SABONETE ACRE PROOFING NEUTROGENA",
            "preco": 48.76,
            "avaliacao": 4.9,
            "imagem": "https://du3hj28fogfli.cloudfront.net/Custom/Content/Products/64/49/64498_tonico-facial-neutrogena-acne-proofing-200ml-p7891010974893_m1_637729172138272044.png"
        },
        {

            "id": 9,
            "nome": "PROTETOR SOLAR NEUTROGENA",
            "preco": 42.95,
            "avaliacao": 4.9,
            "imagem": "https://d16w7cuzwgzfcy.cloudfront.net/Custom/Content/Products/17/66/176679_protetor-solar-neutrogena-sun-fresh-facial-fps70-40gr-p558551_m2_637968714809467029.png"
        },
        {

            "id": 10,
            "nome": "ÁGUA MICELAR NEUTROGENA",
            "preco": 121.99,
            "avaliacao": 4.6,
            "imagem": "https://cdn.awsli.com.br/300x300/2010/2010755/produto/2137391222c13e653c4.jpg"
        },
        {

            "id": 11,
            "nome": "HIDRATANTE HYDRO NEUTROGENA",
            "preco": 57.90,
            "avaliacao": 2.5,
            "imagem": "https://static.netshoes.com.br/produtos/gel-hidratante-facial-neutrogena-hydro-boost-water-gel-50g/60/M36-0049-460/M36-0049-460_zoom1.jpg?ts=1588719138"
        },
        {
            "id": 12,
            "nome": "BASE TOO FACED",
            "preco": 249.00,
            "avaliacao": 3.5,
            "imagem": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ_XDpiSAO5vjK4D8mcfvKE1vxVo-uoI9x5zaz7ue7_yO75WgeRo0s_GxTOhe3RJxPRT6E8dxjMmZNR95ADS30SfZcmwmP15IVLGg16CQn3IfiBAwIdUj-S1Q&usqp=CAE"
        },
        {

            "id": 13,
            "nome": "BLUSH TOO FACED",
            "preco": 249.00,
            "avaliacao": 4.9,
            "imagem": "https://www.toofaced.com.br/media/export/cms/products/1000x1000/2f_sku_163973_1000x1000_0.jpg"
        },
        {

            "id": 14,
            "nome": "BRONZER TOO FACED",
            "preco": 249.00,
            "avaliacao": 4.8,
            "imagem": "https://www.toofaced.com.br/media/export/cms/products/1000x1000/2f_sku_94224_1000x1000_0.jpg"
        },
        {
            "id": 15,
            "nome": "ILUMINADOR TOO FACED",
            "preco": 179.90,
            "avaliacao": 4.7,
            "imagem": "https://paniceimportados.com.br/image/cache/catalog/PRODUTOS/144_00-1300x1300.jpg"
        },
        {
            "id": 16,
            "nome": "PÓ SOLTO TOO FACED",
            "preco":  220.15,
            "avaliacao": 3.6,
            "imagem": "https://epocacosmeticos.vteximg.com.br/arquivos/ids/533654/po-solto-fixador-too-faced-born-this-way-ethereal--1-.jpg?v=638107655766000000"
        },
        {
            "id": 17,
            "nome": "PALETA DE SOMBRAS TOO FACED",
            "preco":  469.00,
            "avaliacao": 4.6,
            "imagem": "https://d3ugyf2ht6aenh.cloudfront.net/stores/518/252/products/nova-paleta-de-sombras-too-faced-sweet-peach-pronta-entrega-d_nq_np_698903-mlb26086007381_092017-f1-9b26b0fe209448554e15176279470065-640-0.webp"
        },
        {
            "id": 18,
            "nome": "KIT MASCARA DE CÍLIOS E GLOSS",
            "preco":  189.90,
            "avaliacao": 4.6,
            "imagem": "https://cdn.iset.io/assets/54712/produtos/10407/toofacedsexyplump.jpg"
        },
        {
            "id": 19,
            "nome": "GLOSS KYLIE JENNER",
            "preco": 139.90,
            "avaliacao": 3.6,
            "imagem": "https://cdn.shopify.com/s/files/1/0566/3175/4839/products/sv9lctfrujuhzorxrw4d_df594451-88bf-4b40-88eb-0dffdbff5d22_600x600.jpg?v=1675091671"
        }, 
        {
            "id": 20,
            "nome": "BATOM KYLIE JENNER",
            "preco": 124.90,
            "avaliacao":4.6,
            "imagem": "https://cdn.shopify.com/s/files/1/0662/4598/4498/products/KJC_MATTE_23_Koko_K_300_Open_V2-0.jpg?v=1682526606"
        },
        {
            "id": 21,
            "nome": "MASCARA DE CÍLIOS KYLIE JENNER",
            "preco": 354.90,
            "avaliacao": 2.6,
            "imagem": "https://cdn.shopify.com/s/files/1/0566/3175/4839/products/KJC_KVMASC_23_KV_Kylie_PDP_Black_01_WS_V2_e03c6d05-609c-486b-872d-7812a902d5f9.jpg?v=1680684761"
        }, 
        {
            "id": 22,
            "nome": "LIP OIL PINK DIOR",
            "preco": 193.73,
            "avaliacao": 3.4,
            "imagem": "https://epocacosmeticos.vteximg.com.br/arquivos/ids/531205-500-500/Oleo-Labial-Dior-Lip-Glow-Oil-001-Pink.jpg?v=638095554224530000"
        }, 
        {
            "id": 23,
            "nome": "LIP OIL DIOR",
            "preco":  193.73,
            "avaliacao": 3.3,
            "imagem": "https://shop.dior.com.sg/cdn/shop/products/3348901560986_1_252a7319-b7b8-4e4f-b0f9-07c367d3dfe1.jpg?v=1672803197"
        }, 
        {
            "id": 24,
            "nome": "LIP OIL RED DIOR",
            "preco": 193.73,
            "avaliacao": 3.3,
            "imagem": "https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw57a659f8/assets/Y0124000/Y0124000_C012400020_E01_ZHC.jpg"
        }, 
        {
            "id": 25,
            "nome": "PALETA BLUSH BRONZER E ILUMINADOR DIOR",
            "preco": 359.00,
            "avaliacao": 3.6,
            "imagem": "https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw65404f1b/assets/Y0015002/Y0015002_C001500002_E01_GHC.jpg?sw=715&sh=773&sm=fit&imwidth=800"
        }, 
        {
            "id": 26,
            "nome": "PALETA DE SOMBRAS DIOR",
            "preco":  405.90,
            "avaliacao": 4.9,
            "imagem": "https://cdn.awsli.com.br/800x800/7/7753/produto/210626232/paleta-de-sombras-backstage-coral-neutrals-dior-removebg-preview-msepox.jpg"
        }, 
        {
            "id": 27,
            "nome": "GEL PARA SOBRANCELHAS BENEFIT",
            "preco":  104.90,
            "avaliacao": 2.6,
            "imagem": "https://a-static.mlcdn.com.br/450x450/gel-de-sobrancelhas-gimme-brow-mini-benefit-cor-3/alikkamaquiagensecosmeticosltda/15845255826/02a4b7631fe2ca8ed0235374e6544fba.jpg"
        }, 
        {
            "id": 28,
            "nome": "LAPIS PARA SOBRANCELHAS BENEFIT",
            "preco": 178.90,
            "avaliacao": 4.6,
            "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF14G8pnuNB5CYpssXMuOljHBiGZOjCPlgDnuWVRzhAKHAn8VSm52dZdXiaF0nE9ey6JE&usqp=CAU"
        }, 
        {
            "id": 29,
            "nome": "PASTA PARA SOBRANCELHAS BENEFIT",
            "preco": 119.99,
            "avaliacao": 3.3,
            "imagem": "https://cdn.awsli.com.br/600x450/350/350456/produto/20642074/8111c7ac72.jpg"
        }, 
        {
            "id": 30,
            "nome": "PALETA PARA PREENCHER SOBRANCELHAS BENEFIT",
            "preco": 129.00,
            "avaliacao": 3.4,
            "imagem": "https://falandodebeleza.files.wordpress.com/2017/10/foolproof-brow-powder-sobrancelhas-benefit.jpg?w=1086"
        }, 
        {
            "id": 31,
            "nome": "MASCARA DE CÍLIOS FENTY BEAUTY",
            "preco": 110.00,
            "avaliacao": 3.6,
            "imagem": "https://cdn.awsli.com.br/800x800/364/364776/produto/211086293/8fbfcb26-c1ef-4a9c-ade0-54bc55c53ebe-fnioym.jpg"
        }, 
        {
            "id": 32,
            "nome": "CONTORNO EM BASTAO FENTY BEAUTY",
            "preco": 189.00,
            "avaliacao": 4.9,
            "imagem": "https://cdn.awsli.com.br/300x300/364/364776/produto/34764494/d559ceb4c6.jpg"
        }, 
        {
            "id": 33,
            "nome": "BATOM LÍQUIDO FENTY BEAUTY",
            "preco": 185.90,
            "avaliacao": 2.6,
            "imagem": "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw5b9f0229/images/hi-res-BR/silo22_stunna_lip_paint_longwear_fluid_uncensore_w_cap_2000x2000_rgb_1500px.jpg?sw=556&sh=680&sm=fit"
        }, 
        {
            "id": 34,
            "nome": "CORRETIVO LÍQUIDO MAC",
            "preco": 179.00,
            "avaliacao": 4.8,
            "imagem": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRzb0d5gWBVrUOdQZ3sRAaglILWrfdQzqy2eETv1u2sJ4LQ4-H0Kc6OTeGJYVo66aeXWawwAICrawRKWUCIcZLHhjcNxuRI_C4rjNfphArrrq2tHm8kunzN&usqp=CAE"
        }, 
        {
            "id": 35,
            "nome": "PALETA DE CORRETIVOS MAC",
            "preco": 269.00,
            "avaliacao": 3.6,
            "imagem": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSaEukAJW65Mg8_s5waxAeJCKpi8HKOogQvdHS4-X1PwvSoXCOTqtD6cjmDUv8ayub9QuzOcmfuzq5lHfTOuxJIH1AjuQyxVURR3WITWWPS9sA4CkQnfaryVw&usqp=CAE"
        }, 
        {
            "id": 36,
            "nome": "CORRETIVO LÍQUIDO BOCA ROSA",
            "preco": 38.90,
            "avaliacao": 4.4,
            "imagem": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRvZsWaoTKb5pelb_YJ_t6iph7rF1cwwn_KKMw4G6Rx_0OhdHGyBrVY8lnmka8qpPZh3Ybciv4tJdneiAEVuvbIjQ_6ThMRHV9kyA9NuZOXv7M7iCVbkSM5GQ&usqp=CAE"
        }, 
        {
            "id": 37,
            "nome": "BATOM LÍQUIDO BOCA ROSA",
            "preco": 39.90,
            "avaliacao": 4.6,
            "imagem": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQSkf9M5UxL2qazZA-G9F6THNH3MV2pA6KxnkMcQxp12ILCWYOAw_RI6AlABNajy-fYFfQ8OeRkxQ6XPfSXRJu1S_ZeeM7FZQ5-bNfQrlE4wojd0LTxAT1zCw&usqp=CAE"
        }, 
        {
            "id": 38,
            "nome": "DELINEADOR BOCA ROSA",
            "preco": 34.50,
            "avaliacao": 3.6,
            "imagem": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0nJ8ZoUZ74Z_Y3b_d3cqBp7Hc7Zv6qX1czQ9hu4_GhVyDNlvhMirlL20yiHVZ_va_Vfl09hnqXJ3EQwuY1Pk1P3-V1gJOm7Sq0_tm-vvjE1NQ_woy1RV3YA&usqp=CAE"
        }, 
        {
            "id": 39,
            "nome": "BASE VS MARI MARIA ",
            "preco": 58.90,
            "avaliacao": 4.6,
            "imagem": "https://a-static.mlcdn.com.br/800x560/base-e-corretivo-matte-nude-velvet-skin-marimariamakeup-mari-maria-makeup/lisimakeup/6de6ca32cad811ebbe794201ac18500e/64711c8b1845737cf5161697b9b8fdaf.jpeg"
        }, 
        {
            "id": 40,
            "nome": "GLOSS MARI MARIA",
            "preco": 38.90,
            "avaliacao": 4.5,
            "imagem": "https://d3iyfln0g34vav.cloudfront.net/Custom/Content/Products/10/27/1027847_gloss-liquido-mari-maria-makeup_m3_637297356779762889.png"
        }, 
        {
            "id": 41,
            "nome": "ILUMINADOR STELLA MARI MARIA",
            "preco": 72.90,
            "avaliacao": 3.2,
            "imagem": "https://images.tcdn.com.br/img/img_prod/912920/180_mari_maria_makeup_iluminador_em_po_stella_15343_1_32eaa527ebe55394f482969bd3b3729c.jpg"
        }, 
        {
            "id": 42,
            "nome": "GEL PARA SOBRASNCELHAS MARI MARIA",
            "preco": 45.90,
            "avaliacao": 3.9,
            "imagem": "https://d3iyfln0g34vav.cloudfront.net/Custom/Content/Products/10/36/1036604_delineador-em-gel-para-sobrancelhas-mari-maria-makeup-5g-nova-embalagem-_m4_637816473697386193.jpg"
        }, 
        {
            "id": 43,
            "nome": "PRIMER PORE MARI MARIA",
            "preco":  49.99,
            "avaliacao": 2.5,
            "imagem": "https://www.stelastores.com.br/uploads/products/2022/07/2371-pore-perfect-primer-mari-maria-makeup-1658929974.png"
        },
        {
            "id": 44,
            "nome": "BASE NARS C20",
            "preco": 339.90,
            "avaliacao": 4.8,
            "imagem": "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/20046347/1_194251070667.jpg"
        },
        {
            "id": 45,
            "nome": "BLUSH EM PÓ NARS",
            "preco": 259.00,
            "avaliacao": 3.7,
            "imagem": "https://static.thcdn.com/images/small/original//productimg/original/10449354-1484927591420956.jpg"
        },
        {
            "id": 46,
            "nome": "PÓ SOLTO NARS",
            "preco": 299.00,
            "avaliacao": 4.8,
            "imagem": "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw88f4902d/images/marketplace/nars_fa19_lrsp_loose_product_photo_crystal_glbl_square_1500px.jpg?sw=400&sh=400&sm=fit"
        },
        {
            "id": 47,
            "nome": "BLUSH LÍQUIDO RARE BEAUTY",
            "preco":  159.00,
            "avaliacao": 4.7,
            "imagem": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhvyrw3x64PpFr9h3FS3geb9NK90PhWrNokE5PBTuYTdHmJOHDIDE4oNU60V-5x1Mvq5Qb-jpW55DvVNSdvVPii73BEbudq_LAGC5qI3pBMZjju_MY_Tph&usqp=CAE"
        },
        {
            "id": 48,
            "nome": "KIT 10 PINCÉIS MK PROFISSIONAL",
            "preco": 96.90,
            "avaliacao": 4.3,
            "imagem": "https://carrefourbr.vtexassets.com/arquivos/ids/22418625/Kit-10-Pinceis-Maquiagem-Kabuki-Profissional-Jogo-Pincel.jpg?v=637641289051430000"
        },
        {
            "id": 49,
            "nome": "KIT 10 PINCÉIS MAKEUP PROFISSIONAL ",
            "preco": 20.24,
            "avaliacao": 4.5,
            "imagem": "https://a-static.mlcdn.com.br/400x600/kit-10-pinceis-maquiagem-kabuki-e-precisao-rosa-magic-make/luxhair/2115p/aee38373e7cbe3af9037e9e4d339062a.jpeg"
        }, 
        {
            "id": 50,
            "nome": "KIT 4 PINCÉIS",
            "preco": 34.41,
            "avaliacao": 3.4,
            "imagem": "https://imgs.casasbahia.com.br/1508970861/1xg.jpg?imwidth=500"
        }


    ]

    return produtos;
}

export default Produtos;