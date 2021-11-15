const template = document.createElement('template');
template.innerHTML = `
<style>
  .dev-card {
    font-family: sans-serif;
    background: lightskyblue;
    max-width: 800px;
    display: flex;
    margin: 0 auto;
  }
  
  .dev-card__avatar {
    padding: 10px;
  }
  
  .dev-card__line {
    display: flex;
  }
  
  .dev-card__prop {
    margin-right: 10px;
  }
  
  .dev-card__avatar img {
    max-width: 64px;
    max-height: 64px;
  }
  
  .dev-card__details {
    padding: 10px;
  }
  
  slot {
    display: inline-block;
  }
</style>
<div class="dev-card">
    <div class="dev-card__left">
        <slot class="dev-card__avatar" name="avatar">
            <img src="./default-avatar.png" alt="avatar"/>
        </slot>
    </div>
    
    <div class="dev-card__right">
        <div class="dev-card__details">
            <div class="dev-card__line">
                <b class="dev-card__prop">Name:</b>
                <slot class="dev-card__value" name="name">N/A</slot>
            </div>
            
            <div class="dev-card__line">
                <b class="dev-card__prop">Github:</b>
                <slot class="dev-card__value" name="github">
                    <a href="#">N/A</a>
                </slot>
            </div>
            
            <div class="dev-card__line">
                <b class="dev-card__prop">Skills:</b>
                <slot class="dev-card__value" name="skills">N/A</slot>
            </div>
            
            <div class="dev-card__line">
                <b class="dev-card__prop">About:</b>
                <slot class="dev-card__value" name="about">N/A</slot>
            </div>
        </div>
    </div>
</div>
`;

class DevCardComponent extends HTMLElement {
    // массив имён атрибутов для отслеживания их изменений
    static get observedAttributes() {
        return ['avatar', 'name', 'github', 'skills', 'about'];
    }
    
    constructor() {
        super();
        
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    // браузер вызывает этот метод при добавлении элемента в документ
    connectedCallback() {
        this.avatarSlot = this.shadowRoot.querySelector('[name="avatar"]');
        this.nameSlot = this.shadowRoot.querySelector('[name="name"]');
        this.githubSlot = this.shadowRoot.querySelector('[name="github"]');
        this.skillsSlot = this.shadowRoot.querySelector('[name="skills"]');
        this.aboutSlot = this.shadowRoot.querySelector('[name="about"]');
        
        this.render();
    }
    
    // вызывается при изменении одного из перечисленных выше атрибутов
    attributeChangedCallback(name, oldValue, newValue) {
        this.#syncSlot(name, newValue);
    }
    
    render() {
    
    }
    
    // синхронизирует слот с аттрибутом
    #syncSlot(slot, value) {
        // сначала пытаемся найти уже подставленный элемент в слот и меняем его содержимое
        // иначе ищем слот в шадов дом
        slot = this.querySelector(`[slot="${slot}"]`) ||
            this.shadowRoot.querySelector(`slot[name="${slot}"]`);
        
        switch (slot.name) {
            case 'avatar': {
                slot.querySelector('img').src = value;
                
                break;
            }

            case 'github': {
                const a = slot.querySelector('a');
                a.href = value;
                a.innerText = value;
                
                break;
            }

            default: {
                if (value) {
                    slot.innerText = value;
                } else {
                    slot.innerText = 'N/A';
                }
                
                break;
            }
        }
    }
}

window.customElements.define('dev-card', DevCardComponent);