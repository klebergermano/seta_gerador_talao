const folhasTalao = require ('./folhasTalao');


const pdfTemplate = (data)=>{
var talao = ''; 

  data.forEach((e, i, a)=>{
  
  talao += folhasTalao(e.cod, e.responsavel, e.aluno, e.curso, e.parcela, 
                       e.data_vencimento, e.valor, e.desconto, e.valor_total, e.id_aluno);

  });


    return (`
    <!DOCTYPE >
    <html>
      <head>
        <title></title>
        <meta http-equiv="Content-Language" content="pt-br">
        <meta charset="UTF-8">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Archivo+Black|Roboto:500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:700&display=swap" rel="stylesheet"> 
          <style>
            * { box-sizing: border-box; margin:0px; padding:0px;  }
            .a4 { font-family: "Open Sans";  width: 21cm; height: auto; overflow: hidden; margin: 0 auto; background: #f0f0f0; }
            #title_recibo_pag{
              font-family: "Roboto"; padding-left:10px; color:#111;
            }
           
            .bg_boleto {width: 21cm;  border-bottom: 1px dotted #fff; height: 7.42cm; background: #fff;  overflow: hidden; border-bottom:1px dotted #ccc}
            .bloco_cliente {  padding: 10px 15px 10px 30px;  float: left; width: 7.72cm; height: 7.43cm; border-right: 1px dotted #ccc; }
            .bloco_destaque {  padding: 10px 20px 10px 10px;  background: #fff; float: right;  width: 13.12cm; height: 7.43cm; border-right: 1px dotted #fff; }
            th {} table,th,td { border: 1px solid #bbb; border-collapse: collapse; }
            th,td { padding: 0px 4px 0px 10px; height: 25px; overflow: hidden; font-size: 13px; }
            .font_6 { font-size: 10px; }
            .label_top { font-weight: bold; clear: both; display: block; font-size: 9px; padding-top: 2px; }
            .value { font-size: 12px; }
            .valor_total { font-size: 14px; }
            .seta_nome { padding: 10px 10px !important; }
            .seta_nome span { font-weight: normal;  height: 35px; }
            .RA { font-size: 8px; }
            hr {  margin-top: 25px;}
            .ass {padding: 8px; border-bottom: 0px; border-left: 0px !important; }
            .ass_label { margin-top: 10px; float: left;  padding: 0 10px 0px 0px;}
            .data_destaque {margin-top: 10px; float: right; padding: 0px 10px; }
            .curso { font-size: 13px;  padding: 0 5px;  text-transform: uppercase; }
            h3 { padding: 0px; margin-top: 0px; margin-bottom: 0px;  float: left; font-weight: bolder; }
            b { letter-spacing: 0px; font-family: 'Open Sans'; font-size: 11px; color: #222; }
            .bloco_cliente td { font-size: 11px;  padding: 4px 5px 4px 5px; }
            .cifrao_total {font-size: 13px;}
            .bloco_cliente b { font-size: 10px;}
            .data_cliente { height: 50px; }
            .RA_cliente { font-size: 9px !important;}
            .n_lanc_cliente { font-size: 10px !important;}
            .n_lanc { font-size: 10px !important;}
            .n_lanc b { font-weight:bold; font-size:9px;}
  
            .curso_cliente { font-size: 13px; padding: 0 5px; text-transform: uppercase;}
            .responsavel,.responsavel_cliente,.aluno,
            .aluno_cliente {}
          </style>
      </head>
      <body>
        <div class="a4">
  ${talao}
      
 
        </div>
      </body>
    </html>
    
    
      
    
    
    `);

}

module.exports = pdfTemplate; 

//  ${folhas_template}
