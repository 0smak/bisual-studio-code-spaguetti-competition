import { OSSyntax } from './OSSyntax';
import { Syntax } from './OSSyntax'
export class ParseCode {

    public parseToOS() {
        const spans = document.querySelectorAll('#code-editor span, #code-editor div');
        const osSynstax = new OSSyntax();
        const syntax: Syntax[] = [];
        osSynstax.syntax.forEach(s => {
            syntax.push(...s.syntax);
        })
        let out = '';
        spans.forEach(span => {
            if (span.localName === 'div') {
                out += '\n';
            } else {
                let tok = span.innerHTML;
                const found = syntax.find(s => s.os === tok.trim())
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
            .replace(/&lt/g, '<')

        console.log(out);
    }

    findItemNested(els, token, k) {
        return els.reduce((a, item) => {
            if (a) return a;
            if (item.os === token) return item;
            if (item[k]) return this.findItemNested(item[k], token, k)
        }, null)
    }
}
