import { useEffect, useState } from "react";
import { saveAs } from "file-saver";

const GerarTalaoPDF = ()=>{
    const [results, setResults] = useState([]);
    const [id_talao, setId_talao] = useState();
    const [nomeResp, setNomeResp] = useState("");
    const [nomeAluno, setAluno] = useState("");
    const [RA, setRA] = useState("");
    const [nomeCurso, setNomeCurso] = useState("");
    const [valor, setValor] = useState();
    const [desconto, setDesconto] = useState();
    const [valor_total, setValorTotal] = useState();
    const [vencimento, setVencimento] = useState("0000-00-00");

       
useEffect(()=>{
    let btnSalvar = document.querySelector("#salvarPDF");
    btnSalvar.disabled = true;
  }, []);
  
    useEffect(() => {
      fetch("/view_talao")
        .then((res) => res.json())
        .then((res) => {
          setResults(res);
         
        });
  
      results.forEach((e, i, a) => {
        if (e.id == id_talao) {
          setNomeResp(e.responsavel);
          setAluno(e.aluno);
          setRA(e.RA);
          setNomeCurso(e.curso);
          let data_vencimento = new Date(e.vencimento);
          let ano = data_vencimento.getFullYear();
          let mes = data_vencimento.getMonth() + 1; // Meses são contador apartir do 0 no js +1 corrigi isso
          let dia = data_vencimento.getDate();
          let f_data_vencimento = dia + "/" + mes + "/" + ano;
          let f_valor = e.valor.toFixed(2).replace(/\./g, ",");
          let f_desconto = e.desconto.toFixed(2).replace(/\./g, ",");
          let f_valor_total = e.valor_total.toFixed(2).replace(/\./g, ",");
          setValor(f_valor);
          setDesconto(f_desconto);
          setValorTotal(f_valor_total);
          setVencimento(f_data_vencimento);
  
        }
      });
    }, [id_talao]);

    const handleSelectChange = (e) => {
        let id = e.target.value;
        let btnSalvar = document.querySelector("#salvarPDF");
            btnSalvar.disabled = false;
        setId_talao(id);
      };

      const createPDF = () => {
        let loading = document.querySelector("#bg_loading");
    
        loading.style.display = "block";
        fetch(`/create-pdf/?id=${id_talao}`)
          .then((res) => res.blob())
          .then((blob) => {
            saveAs(blob, id_talao + "-" + nomeResp + "-" + nomeCurso.toUpperCase());
          })
          .then(() => {
            loading.style.display = "none";
          
          });
      };

  
      return (
        <div className="container">
    
          <div className="bg_pages">
            <div className="bg_select_talao">
              <div id="bg_loading">
                <h3>Carregando Arquivo...</h3>
              </div>
    
              <form onSubmit={createPDF}>
                <div id="select_talao">
                  <label>Selecionar Talão</label>
                  <select onChange={handleSelectChange}>
                    <option selected="selected" disabled>
                      Selecione o Talão...
                    </option>
                    {results.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.id +
                          " - " +
                          item.responsavel +
                          " --- (" +
                          item.curso +
                          ") "}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  id="salvarPDF"
                  type="button"
                  onClick={createPDF}
                  value="Salvar PDF"
                  
                />
              </form>
            </div> {/*select_talao*/}
            <div id='bg_talao_previa'>
              <div className='talao_previa'>
                <div><p><span>Responsável:</span>{nomeResp}</p></div>
                <div><p><span>Curso:</span>{nomeCurso}</p></div>
                <div><p><span>Aluno:</span>{nomeAluno}  &nbsp;&nbsp;&nbsp;<span>RA:</span>{RA}</p></div>
                <div><p><span>Valor: </span> R$: {valor}</p></div>
                <div><p><span>Desconto:</span>R$: {desconto}</p></div>
                <div><p><span>Valor Total:</span>R$: {valor_total}</p></div>
                <div><p><span>Vencimento:</span>{vencimento}</p></div>
              </div>
            </div>
          </div>
        </div>
      );


}

export default  GerarTalaoPDF;