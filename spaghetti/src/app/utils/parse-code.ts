import { EJSSyntax } from './EJSSyntax';
import { Syntax } from './EJSSyntax'
export class ParseCode {


    public parseToEJS(tokens: NodeListOf<any>): string {

        const spans = tokens;
        const ejsSynstax = new EJSSyntax();
        const syntax: Syntax[] = [];
        ejsSynstax.syntax.forEach(s => {
            syntax.push(...s.syntax);
        })
        let out = '';
        spans.forEach(span => {
            if (span.localName === 'div') {
                out += '\n';
            } else {
                let tok = span.innerHTML;
                const found = syntax.find(s => s.ejs === tok.trim())
                if (found) {
                    out += found.es6
                } else {
                    out += tok
                }
            }
        })
        out = out
            .replace(/&nbsp;/g, ' ')
            .replace(/&gt;/g, '>')
            .replace(/&lt;/g, '<')

        return out;
    }

    findItemNested(els, token, k) {
        return els.reduce((a, item) => {
            if (a) return a;
            if (item.ejs === token) return item;
            if (item[k]) return this.findItemNested(item[k], token, k)
        }, null)
    }
}
