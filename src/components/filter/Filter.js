
import { ButtonFilter } from "../ui/buttonfilter/ButtonFilter"
import "./filter.scss"
export const Filter = ({setStatus,setGender,setPagination,setSearch,setSpecies}) => {
  const statusData = ["alive", "dead", "unknown"];
  const genderData = ["male", "female", "unknown", "genderless"];
  const speciesData = ["species", "human", "alien", "humanoid", "poopybutthole", "mythological", "unknown", "disease", "cronenberg", "animal", "robot", "planet"];
  const clear = () => { setStatus(""); setGender(""); setPagination(1); setSearch("");setSpecies("") }
  return (
    <div>
      <h2 className="text-center">Filter</h2>
      <p className="refs text-center text-primary text-decoration-underline" onClick={clear}>Clear all</p>
       <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Status
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
              {statusData.map((item, index) => <ButtonFilter setStatuss={setStatus} name="status" key={index} text={item} />)}
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Gender
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {genderData.map((item, index) => <ButtonFilter setStatuss={setGender} key={index} name="gender" text={item} />)}
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Species
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {speciesData.map((item, index) => <ButtonFilter setStatuss={setSpecies} key={index} name="species" text={item} />)}
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
