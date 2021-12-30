const form = document.querySelector('#form'),
    container = document.querySelector('#container');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const elements = event.target.elements,
        widthElement = elements.width,
        width = Number(elements.width.value),
        heightElement = elements.height,
        height = Number(elements.height.value),
        template = elements.template.value;
    
    validate(widthElement).required().moreThan(0);
    validate(heightElement).required().moreThan(0);
    event.target.reportValidity();
    
    const isValid = event.target.checkValidity();
    
    if (isValid) {
        const table = createTable(width, height, template);
        container.innerHTML = table.outerHTML;
    }
});

/**
 * Create and return new table
 * @param {number} rows - rows count
 * @param {number} cols  - rows count
 * @param {string} template  - rows content
 * @return {HTMLTableElement} - created table
 */
function createTable(cols, rows, template) {
    
    let table = document.createElement('table');
    
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.innerHTML = template;
            tr.appendChild(td);
        }
        
        table.appendChild(tr);
    }
    
    return table;
}

/**
 * Validate element's value
 * @param element - element for validation
 */
function validate(element) {
    const clearError = () => {
            element.setCustomValidity('');
        },
        handleErrors = () => {
            if (element.validity.valid === false) {
                element.addEventListener('change', clearError);
                element.addEventListener('keydown', clearError);
            }
        },
        methods = {
            /**
             * Should be non empty
             */
            required: () => {
                if (!element.value) {
                    element.setCustomValidity('Value is required and cannot be empty!');
                }
                
                handleErrors();
                
                return methods;
            },
            
            /**
             * Should be more than value
             * @param value
             */
            moreThan: (value) => {
                if (Number(element.value) <= Number(value)) {
                    element.setCustomValidity(`Value have to be more than ${value}!`);
                }
        
                handleErrors();
        
                return methods;
            }
        };
    
    return methods;
}